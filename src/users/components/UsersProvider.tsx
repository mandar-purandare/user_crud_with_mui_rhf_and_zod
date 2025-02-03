import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { defaultValues, schema, Schema } from '../types/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Users from './Users'

function UsersProvider() {
    const methods = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues,
  })
  return (
    <FormProvider {...methods}>
      <Users/>
    </FormProvider>
  )
}

export default UsersProvider