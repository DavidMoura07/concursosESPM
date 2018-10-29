import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {cargo} from "./cargo";
import {procedimento} from "./procedimento";
import {experienciaprofissional} from "./experienciaprofissional";


@Entity("grupoexperiencia",{schema:"public"})
export class grupoexperiencia {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"grupoexperienciaid"
        })
    grupoexperienciaid:number;
        

   
    @ManyToOne(type=>cargo, cargo=>cargo.grupoexperiencias,{  })
    @JoinColumn({ name:'cargoid'})
    cargo:cargo | null;


    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

   
    @ManyToOne(type=>procedimento, procedimento=>procedimento.grupoexperiencias,{  })
    @JoinColumn({ name:'procedimentoid'})
    procedimento:procedimento | null;


   
    @OneToMany(type=>experienciaprofissional, experienciaprofissional=>experienciaprofissional.grupoexperiencia)
    experienciaprofissionals:experienciaprofissional[];
    
}
