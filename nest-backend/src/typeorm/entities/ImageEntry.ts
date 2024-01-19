import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PortfolioEntry } from './PortfolioEntry';

@Entity('images')
export class ImageEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  originalname: string;

  @Column({ nullable: false })
  file_path: string;

  @Column({ nullable: false })
  mimetype: string;

  @Column({ nullable: false })
  size: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => PortfolioEntry, (portfolioEntry) => portfolioEntry.images)
  @JoinColumn({ name: 'portfolioEntryId' })
  portfolioEntry: PortfolioEntry;
}
