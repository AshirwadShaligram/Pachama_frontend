// FORM TYPES
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  confirmPassword: string;
}

export type RegisterRequest = Omit<RegisterFormData, "confirmPassword">;

// API RESPONSE TYPES
export interface User {
  email: string;
  role: "Customer" | "Seller" | "Admin";
}

export interface RegisterResponse {
  message: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  message?: string;
}

export interface RefreshResponse {
  accessToken: string;
  user: User;
}

// REDUX TYPES
export interface AUthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  authChecked: boolean;
}
