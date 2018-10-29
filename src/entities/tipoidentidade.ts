import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("tipoidentidade",{schema:"public"})
export class tipoidentidade {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tipoidentidadeid"
        })
    tipoidentidadeid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.tipoidentidade)
    inscricaos:inscricao[];
    
}
