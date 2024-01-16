// src/event/event.dto.ts
export class EventDto {
    name: string;
    jobAddress: string;
    venueSize: number;
    isWorkFromHome: boolean;
    staffs: {
      numberOfStaffs: number;
      job: {
        date: string[];
        startTime: string;
        endTime: string;
      };
      shiftDescription: string;
    }[];
    groomingPolicy: string;
    entryInstructions: string;
  }
  