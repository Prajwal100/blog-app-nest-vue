import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteTagInput{
    @Field(()=>Boolean)
    success:boolean
    
    @Field(()=>String)
    message:string
}