import { TaskInterface } from 'interfaces/task';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  service_id?: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  service?: ServiceInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  service_id?: string;
  customer_id?: string;
}
