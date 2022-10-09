import React, { PropsWithChildren } from 'react'

type FlexProps = PropsWithChildren<{
  flexDirection?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: number
  flex?: number
}>

export default function Flex({ flex, gap, flexDirection, justifyContent, alignItems, children, flexWrap }: FlexProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexWrap: flexWrap,
      gap: gap,
      width: '100%',
      flex: flex
    }}>
      {children}
    </div>
  )
}