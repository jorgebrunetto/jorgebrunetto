import React from "react";
import { type IconBaseProps } from "react-icons/lib";

import * as GiIcon from "react-icons/gi";
import * as PiIcon from "react-icons/pi";
import * as SiIcon from "react-icons/si";

import { match, P } from "ts-pattern";

export type IconName =
  | keyof typeof PiIcon
  | keyof typeof GiIcon
  | keyof typeof SiIcon;

export type IconProps = IconBaseProps & {
  name: IconName;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  const element = match(name)
    .with(P.string.startsWith("Pi"), icon => PiIcon[icon])
    .with(P.string.startsWith("Gi"), icon => GiIcon[icon])
    .with(P.string.startsWith("Si"), icon => SiIcon[icon])
    .otherwise(() => React.Fragment);

  return React.createElement(element, { size, ...props });
}
