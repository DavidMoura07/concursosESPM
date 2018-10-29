import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {concurso} from "./concurso";


@Entity("comunicado",{schema:"public"})
export class comunicado {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"comunicadoid"
        })
    comunicadoid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"titulo"
        })
    titulo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"descricao"
        })
    descricao:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datacriacao"
        })
    datacriacao:Date | null;
        

   
    @ManyToOne(type=>concurso, concurso=>concurso.comunicados,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;

}
