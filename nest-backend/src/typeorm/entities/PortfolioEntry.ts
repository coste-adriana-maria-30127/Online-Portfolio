import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'portfolio_entries' })
export class PortfolioEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  imageURL: string;

  @Column({ nullable: true })
  customerLink: string;

  @Column({ default: true })
  visible: boolean;
}
