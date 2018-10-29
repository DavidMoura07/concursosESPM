import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {grupotitulo} from "./grupotitulo";
import {inscricaotitulo} from "./inscricaotitulo";


@Entity("titulo",{schema:"public"})
export class titulo {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"tituloid"
        })
    tituloid:number;
        

   
    @ManyToOne(type=>grupotitulo, grupotitulo=>grupotitulo.titulos,{  })
    @JoinColumn({ name:'grupotituloid'})
    grupotitulo:grupotitulo | null;


    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"quantidademaxima"
        })
    quantidademaxima:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacao"
        })
    pontuacao:string | null;
        

   
    @OneToMany(type=>inscricaotitulo, inscricaotitulo=>inscricaotitulo.titulo)
    inscricaotitulos:inscricaotitulo[];
    
}
