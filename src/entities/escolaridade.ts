import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("escolaridade",{schema:"public"})
export class escolaridade {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"escolaridadeid"
        })
    escolaridadeid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:30,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.escolaridade)
    inscricaos:inscricao[];
    
}
