export interface Child {
    name: string;
    age: number;
}
  
export interface Passenger {
    id: number;
    fname: string;
    lname: string;
    checkedin: boolean;
    checkedInDate: number | null;
    children: Child[] | null;
}
