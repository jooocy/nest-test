import { PartialType } from '@nestjs/mapped-types';
import { CreateTddDto } from './create-tdd.dto';

export class UpdateTddDto extends PartialType(CreateTddDto) {}
