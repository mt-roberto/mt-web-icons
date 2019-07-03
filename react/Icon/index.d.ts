/// <reference types="react" />
import { SVGAttributes, HTMLAttributes, ReactElement } from 'react';
import { Merge } from 'type-fest';
interface ICoreProps {
  name: string;
  fallback?: ReactElement;
  placeholder?: ReactElement;
}
declare type IIconComponentProps = Merge<SVGAttributes<SVGElement>, HTMLAttributes<SVGElement>, ICoreProps>;
export default function IconComponent(props: IIconComponentProps): ReactElement;
