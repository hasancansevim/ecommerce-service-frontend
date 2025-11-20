export interface Store {
  id: number;
  name: string;
  slug: string;
  description: string;
  logo_url: string;
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}
