import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg33">
  <div className="rts-navigation-area-breadcrumb pb--10">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          {/*   <div class="navigator-breadcrumb-wrapper">
    <h3>Add Catalog</h3>
  </div> */}
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li>
                <Link href="#">
                  <img src={`${baseUrl}front/assets/images/hand_shaking.png`} />
                  Help
                </Link>{" "}
              </li>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-video" />
                  Learn How to do Listing
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="crate_yout_catalog">
              <h2>Create Your Catalog</h2>
              <p>
                Add, organize, and customize your items exactly how you want
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="form_outer">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="download_outer">
                      <h2>Download and Upload spreadsheet</h2>
                      <p>For Bulk Listing, Download Tamplates</p>
                    </div>
                  </div>
                  <div className="col-lg-6 p10">
                    <Link href="/sellor-dashboard/categories">
                      <div className="download_box">
                        <img
                          src={`${baseUrl}front/assets/images/download.jpg`}
                          className="mb-4"
                        />
                        <span>Download Tamplates</span>
                      </div>
                    </Link>
                  </div>
                  {/* scroll area */}
                  <div className="col-lg-6 p10">
                    <div className="download_box upload2">
                      <img src={`${baseUrl}front/assets/images/browse.jpg`} className="mb-2" />
                      <p>
                        Drag and drop a file or <Link href="#">browse</Link>{" "}
                        {/* <input id="hidden-input" type="file" multiple="" class="hidden">
<button id="button" class="rounded-sm px-3 py-1">browse</button> */}
                      </p>
                      <div className="content_df">
                        1 file at a time <span>|</span> XLSX format{" "}
                        <span>|</span> 5 MB max
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form_s2 search_the_sellora_catalog">
                <h2>Search the Sellora catalog</h2>
                <p>
                  Search for the item in the Sellora catalog and match it, if
                  exists. If not,
                  <Link href={`${baseUrl}sellor-dashboard/categories`}>create a new catalog</Link>.
                </p>
                <div className="category_search seach_df pt--30 pb--10">
                  <div className="col-lg-6 offset-lg-3">
                    <form role="search" className="sr-input-func">
                      <input
                        type="text"
                        placeholder="Enter an Item Name"
                        className="search-int form-control"
                      />
                      <Link href="#">
                        <i className="fa fa-search" />
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page