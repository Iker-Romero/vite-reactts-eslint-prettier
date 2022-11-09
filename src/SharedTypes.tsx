export interface InputAndButton {
  color: string;
  backgroundColor: string;
  height: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  justifySelf?: string;
  alignSelf?: string;
}

export interface InputType extends InputAndButton {
  type: string;
  placeholder?: string;
}

export interface ButtonType extends InputAndButton {
  children: string | JSX.Element;
}

export interface HeadingType {
  color: string;
}
