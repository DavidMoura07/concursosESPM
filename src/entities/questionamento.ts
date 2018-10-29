import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {concurso} from "./concurso";


@Entity("questionamento",{schema:"public"})
export class questionamento {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"questionamentoid"
        })
    questionamentoid:number;
        

   
    @ManyToOne(type=>concurso, concurso=>concurso.questionamentos,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;


    @Column("character varying",{ 
        nullable:true,
        length:300,
        name:"nome"
        })
    nome:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:20,
        name:"titulo"
        })
    titulo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"numerocpf"
        })
    numerocpf:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"datasolicitacao"
        })
    datasolicitacao:Date | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dataresposta"
        })
    dataresposta:Date | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"resposta"
        })
    resposta:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"pergunta"
        })
    pergunta:string | null;
        
}
