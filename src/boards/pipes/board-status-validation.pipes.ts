import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStaus } from '../board.model';

export class BaordStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStaus.PRIVATE, BoardStaus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
