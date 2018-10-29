import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {tipocriterio} from "./tipocriterio";
import {concurso} from "./concurso";


@Entity("criteriodesempate",{schema:"public"})
export class criteriodesempate {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"criteriodesempateid"
        })
    criteriodesempateid:number;
        

   
    @ManyToOne(type=>tipocriterio, tipocriterio=>tipocriterio.criteriodesempates,{  })
    @JoinColumn({ name:'tipocriterioid'})
    tipocriterio:tipocriterio | null;


   
    @ManyToOne(type=>concurso, concurso=>concurso.criteriodesempates,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;


    @Column("integer",{ 
        nullable:true,
        name:"ordem"
        })
    ordem:number | null;
        
}
