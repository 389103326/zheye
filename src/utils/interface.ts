export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export interface IColumnDetailProps {
  id: number,
  title: string;
  content: string;
  image?: string;
  time: string;
  columnId: number;
}