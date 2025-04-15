import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BulkUploadingSection() {
  return (
    <div className="col-lg-10 offset-lg-1">
    <div className="row">
      <div className="col-lg-12">
        <div className="download_outer">
          <h2>Download and Upload spreadsheet</h2>
          <p>For Bulk Listing, Download Tamplates</p>
        </div>
      </div>
      <div className="col-lg-6 p10">
        <Link href="/dashboard/categories?ref=bulk">
          <div className="download_box">
          <Image src={`${baseUrl}front/assets/images/download.jpg`} className="mb-4"
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            loading='lazy'
            style={{width:"auto", height:"auto"}}
          />
             
            <span>Download Tamplates</span>
          </div>
        </Link>
      </div>
      {/* scroll area */}
      <div className="col-lg-6 p10">
        <div className="download_box upload2">
          <Image src={`${baseUrl}front/assets/images/browse.jpg`} className="mb-2"
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            loading='lazy'
            style={{width:"auto", height:"auto"}}
          />
          <p>
            Drag and drop a file or <Link href="#">browse</Link>{" "}
             
          </p>
          <div className="content_df">
            1 file at a time <span>|</span> XLSX format{" "}
            <span>|</span> 5 MB max
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BulkUploadingSection