import { IsBoolean, IsNotEmpty, IsPositive } from 'class-validator';
// import { Categoria } from '../../categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produto' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @IsPositive()
  @Column('decimal', { precision: 19, scale: 2 })
  preco: number;

  @Column({ default: true })
  disponibilidade: boolean;
  categoria: any;

  // @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
  //   onDelete: 'CASCADE',
  // })
  // categoria: Categoria;

  //  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
  //   onDelete: 'CASCADE',
  // })
  // usuario: Usuario;
}
