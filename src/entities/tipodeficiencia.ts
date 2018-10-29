import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("tipodeficiencia",{schema:"public"})
export class tipodeficiencia {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tipodeficienciaid"
        })
    tipodeficienciaid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.tipodeficiencia)
    inscricaos:inscricao[];
    
}
