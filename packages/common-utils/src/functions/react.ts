import { ElementType, ReactElement, ReactNode, isValidElement } from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

export const ofType = <Props>(child: ReactNode, element: ElementType<Props>): child is ReactElement<Props> =>
  isValidElement(child) && child.type === element;

const controlledComponents = [Controller] as const;

export const isControlled = (children: ReactNode) =>
  controlledComponents.some((component) => ofType<ControllerProps<FieldValues, string>>(children, component));
