import { HttpException, Injectable } from '@nestjs/common';
import { EventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';  // Import the Event entity

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) {}

  async createEvent(eventDto: EventDto) {
    const event = this.eventRepository.create(eventDto);
    console.log(event)
    return await this.eventRepository.save(event);
  }

  findAll() {
    return this.eventRepository.find();
  }

  async findOne(id: number) {
    const existingEvent = await this.eventRepository.findOneBy({id:id});
    if(!existingEvent) throw new HttpException({message:"the event is not found"},400)
    return this.eventRepository.findOneBy({
      id:id
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event | undefined> {
    const existingEvent = await this.eventRepository.findOneBy({id:id});
    if (!existingEvent) {
      return undefined; // Or throw an exception, depending on your business logic
    }

    const updatedEvent = Object.assign(existingEvent, updateEventDto);
    return await this.eventRepository.save(updatedEvent);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.eventRepository.delete(id);
    return result.affected > 0;
  }
}
