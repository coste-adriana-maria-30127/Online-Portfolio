import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ImageEntry } from './ImageEntry';

@Entity({ name: 'portfolio_entries' })
export class PortfolioEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => ImageEntry, (image) => image.portfolioEntry)
  images: ImageEntry[];

  @Column({ nullable: true })
  customerLink: string;

  @Column({ default: true })
  visible: boolean;
}
