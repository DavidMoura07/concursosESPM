import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("orgaoidentidade",{schema:"public"})
export class orgaoidentidade {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"orgaoidentidadeid"
        })
    orgaoidentidadeid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.orgaoidentidade)
    inscricaos:inscricao[];
    
}
