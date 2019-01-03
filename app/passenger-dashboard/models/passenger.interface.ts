 
export interface Passenger {
    id: number;
    fname: string;
    lname: string;
    checkedin: boolean;
    checkedInDate: number | null;
    baggage: string
}
