import React from "react";
import { type IconBaseProps } from "react-icons/lib";

import * as GiIcon from "react-icons/gi";
import * as PiIcon from "react-icons/pi";

import { match, P } from "ts-pattern";

export type IconName = keyof typeof PiIcon | keyof typeof GiIcon;

export type IconProps = IconBaseProps & {
  name: IconName;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  const element = match(name)
    .with(P.string.startsWith("Pi"), icon => PiIcon[icon])
    .with(P.string.startsWith("Gi"), icon => GiIcon[icon])
    .otherwise(() => React.Fragment);

  return React.createElement(element, { size, ...props });
}
