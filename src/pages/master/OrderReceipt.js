import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { CardLayout } from '../../components/cards'
import PageLayout from '../../layouts/PageLayout'
import Header from '../../layouts/Header'
import OpenReceipt from './OpenReceipt'
import AchieveReceipt from './AchieveReceipt'
import OfflineAchieveReceipt from './OfflineAchieveReceipt'

export default function OrderReceipt() {
    
  return (
    <div>
        <PageLayout>
        <Header />
       <OfflineAchieveReceipt/>
        </PageLayout>
    </div>
  )
}
