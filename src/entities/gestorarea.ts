import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {area} from "./area";


@Entity("gestorarea",{schema:"public"})
export class gestorarea {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"gestorareaid"
        })
    gestorareaid:number;
        

   
    @ManyToOne(type=>area, area=>area.gestorareas,{  })
    @JoinColumn({ name:'areaid'})
    area:area | null;


    @Column("integer",{ 
        nullable:true,
        name:"gestorid"
        })
    gestorid:number | null;
        
}
