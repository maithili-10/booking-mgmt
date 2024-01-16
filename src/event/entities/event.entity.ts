// src/event/event.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Event')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  jobAddress: string;

  @Column()
  venueSize: number;

  @Column()
  isWorkFromHome: boolean;

  @Column('jsonb')
  staffs: {
    numberOfStaffs: number;
    job: {
      date: string[];
      startTime: string;
      endTime: string;
    };
    shiftDescription: string;
  }[];

  @Column()
  groomingPolicy: string;

  @Column()
  entryInstructions: string;
}

