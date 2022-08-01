export interface CategoriesProps {
  title: string;
  cover: string;
}

export interface Client {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
}

export interface WeekEvent {
  cover: string,
  date: string;
  location: string;
  title: string;
  description: string;
}

export interface Event {
  cover: string,
  date: string;
  location: string;
  title: string;
}
