import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {area} from "./area";
import {procedimento} from "./procedimento";
import {grupoexperiencia} from "./grupoexperiencia";
import {grupotitulo} from "./grupotitulo";
import {requisito} from "./requisito";


@Entity("cargo",{schema:"public"})
export class cargo {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"cargoid"
        })
    cargoid:number;
        

   
    @ManyToOne(type=>area, area=>area.cargos,{  })
    @JoinColumn({ name:'areaid'})
    area:area | null;


    @Column("character varying",{ 
        nullable:true,
        length:2000,
        name:"nome"
        })
    nome:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:500,
        name:"descricao"
        })
    descricao:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaomaxtitulo"
        })
    pontuacaomaxtitulo:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaomaxexperiencia"
        })
    pontuacaomaxexperiencia:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:8,
        scale:2,
        name:"pontuacaomaxexperienciaimportada"
        })
    pontuacaomaxexperienciaimportada:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"textopontuacaoimportada"
        })
    textopontuacaoimportada:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:1000,
        name:"textopontuacaoassiduidade"
        })
    textopontuacaoassiduidade:string | null;
        

   
    @ManyToOne(type=>procedimento, procedimento=>procedimento.cargos,{  })
    @JoinColumn({ name:'procedimentoid'})
    procedimento:procedimento | null;


   
    @OneToMany(type=>grupoexperiencia, grupoexperiencia=>grupoexperiencia.cargo)
    grupoexperiencias:grupoexperiencia[];
    

   
    @OneToMany(type=>grupotitulo, grupotitulo=>grupotitulo.cargo)
    grupotitulos:grupotitulo[];
    

   
    @OneToMany(type=>requisito, requisito=>requisito.cargo)
    requisitos:requisito[];
    
}
