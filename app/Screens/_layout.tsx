import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const RootLayout = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})