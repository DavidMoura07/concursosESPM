import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";


@Entity("uf",{schema:"public"})
export class uf {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"ufid"
        })
    ufid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:50,
        name:"descricao"
        })
    descricao:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2,
        name:"sigla"
        })
    sigla:string | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.ufendereco)
    inscricaos:inscricao[];
    

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.ufidentidade)
    inscricaos2:inscricao[];
    
}
