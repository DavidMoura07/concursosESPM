import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {cargo} from "./cargo";
import {inscricao} from "./inscricao";


@Entity("requisito",{schema:"public"})
export class requisito {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"requisitoid"
        })
    requisitoid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

   
    @ManyToOne(type=>cargo, cargo=>cargo.requisitos,{  })
    @JoinColumn({ name:'cargoid'})
    cargo:cargo | null;


    @Column("integer",{ 
        nullable:true,
        name:"acessos"
        })
    acessos:number | null;
        

   
    @OneToMany(type=>inscricao, inscricao=>inscricao.requisito)
    inscricaos:inscricao[];
    
}
