import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {concurso} from "./concurso";


@Entity("arquivo",{schema:"public"})
export class arquivo {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"arquivoid"
        })
    arquivoid:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:400,
        name:"nomearquivo"
        })
    nomearquivo:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"content_type"
        })
    content_type:string | null;
        

    @Column("timestamp without time zone",{ 
        nullable:true,
        name:"dataupload"
        })
    dataupload:Date | null;
        

   
    @ManyToOne(type=>concurso, concurso=>concurso.arquivos,{  })
    @JoinColumn({ name:'concursoid'})
    concurso:concurso | null;


    @Column("boolean",{ 
        nullable:true,
        name:"exibir"
        })
    exibir:boolean | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:5,
        name:"extensao"
        })
    extensao:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"acessos"
        })
    acessos:number | null;
        
}
