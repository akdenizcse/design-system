// Type definitions for @akdeniz-uni/design-system
import * as React from 'react';

export type Tone = 'neutral' | 'success' | 'warn' | 'danger' | 'info';
export type CardTone = 'light' | 'strong';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  icon?: React.ReactNode;
}
export const Button: React.FC<ButtonProps>;

export interface FieldProps {
  label: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export const Field: React.FC<FieldProps>;
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>>;
export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

export interface BadgeProps { tone?: Tone; dot?: boolean; children?: React.ReactNode; className?: string; }
export const Badge: React.FC<BadgeProps>;

export interface CardProps {
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  action?: React.ReactNode;
  tone?: CardTone;
  className?: string;
  children?: React.ReactNode;
}
export const Card: React.FC<CardProps>;

export interface AlertProps {
  tone?: Exclude<Tone, 'neutral'>;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}
export const Alert: React.FC<AlertProps>;

export interface TabItem { id: string; label: React.ReactNode; }
export interface TabsProps { tabs: TabItem[]; value: string; onChange?: (id: string) => void; className?: string; }
export const Tabs: React.FC<TabsProps>;

export const brand: Readonly<{
  name: string;
  founded: number;
  city: string;
  colors: Readonly<{ blue800: string; blue600: string; orange600: string; bg: string }>;
  fontFamily: Readonly<{ text: string; display: string }>;
}>;

export const version: string;
