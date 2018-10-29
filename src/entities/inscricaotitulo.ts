import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {inscricao} from "./inscricao";
import {titulo} from "./titulo";


@Entity("inscricaotitulo",{schema:"public"})
export class inscricaotitulo {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"inscricaotituloid"
        })
    inscricaotituloid:number;
        

   
    @ManyToOne(type=>inscricao, inscricao=>inscricao.inscricaotitulos,{  })
    @JoinColumn({ name:'inscricaoid'})
    inscricao:inscricao | null;


   
    @ManyToOne(type=>titulo, titulo=>titulo.inscricaotitulos,{  })
    @JoinColumn({ name:'tituloid'})
    titulo:titulo | null;


    @Column("integer",{ 
        nullable:true,
        name:"quantidade"
        })
    quantidade:number | null;
        
}
