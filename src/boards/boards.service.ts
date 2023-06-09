import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStaus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStaus.PUBLIC
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find(board => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't fint Board ID ${id}`);
    }
    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards.filter(board => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStaus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
