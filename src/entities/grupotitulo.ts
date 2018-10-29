import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {cargo} from "./cargo";
import {titulo} from "./titulo";


@Entity("grupotitulo",{schema:"public"})
export class grupotitulo {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"grupotituloid"
        })
    grupotituloid:number;
        

   
    @ManyToOne(type=>cargo, cargo=>cargo.grupotitulos,{  })
    @JoinColumn({ name:'cargoid'})
    cargo:cargo | null;


    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"limite"
        })
    limite:number | null;
        

   
    @OneToMany(type=>titulo, titulo=>titulo.grupotitulo)
    titulos:titulo[];
    
}
