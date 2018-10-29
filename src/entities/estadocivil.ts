import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("estadocivil",{schema:"public"})
export class estadocivil {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"estadocivilid"
        })
    estadocivilid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descricao"
        })
    descricao:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.estadocivil)
    inscricaos:inscricao[];
    
}
