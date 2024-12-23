export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request?: any;
}

export interface CareersData<T = any> {
  docs: T;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
}

export interface JobData {
  _id: string;
  title: string;
  location: string;
  type: string;
  pay: string;
  summary: string;
  linkedin_url: string;
  workingConditions: string[];
  jobRequirements: string[];
  dutiesAndResponsibilities: string[];
  createdAt: string;
  updatedAt: string;
}
export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export interface Blog {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
}

export interface JobApplication {
  firstname: string;
  lastname: string;
  email: string;
  linkedin: string;
  country: string;
  qualification: string;
  phone: string;
  whatsapp: string;
  cv: File | null;
  careerId: string;
}
