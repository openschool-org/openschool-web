import React from 'react';
import {
  Calendar,
  Building2,
  GraduationCap,
  Users,
  UserRound,
  UsersRound,
  BookOpen,
  CalendarCheck,
  UserCog,
  Waves,
  ListChecks,
  ShieldCheck,
  type LucideProps,
} from 'lucide-react';
import type {FeatureIcon} from '@site/src/data/generated/features';

const registry: Record<FeatureIcon, React.ComponentType<LucideProps>> = {
  Calendar,
  Building2,
  GraduationCap,
  Users,
  UserRound,
  UsersRound,
  BookOpen,
  CalendarCheck,
  UserCog,
  Waves,
  ListChecks,
  ShieldCheck,
};

type Props = LucideProps & {
  name: FeatureIcon;
};

export default function DynamicIcon({name, ...rest}: Props): React.ReactElement {
  const Icon = registry[name];
  return <Icon {...rest} />;
}
