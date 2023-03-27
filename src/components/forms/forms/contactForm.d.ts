export interface FormField {
  model: string;
  name: string;
}

export interface InputFormField extends FormField {
  require?: boolean;
  type?: string;
}
