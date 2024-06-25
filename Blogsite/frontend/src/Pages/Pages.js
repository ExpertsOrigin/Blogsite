import React from 'react'
import "../Assets/Style/Pages.css"
export default function Pages() {
  return (
    <>
  <div className="pagesnew">
     
   <div className="sidediv">
    <div className="card">
        <img className='pageimg' src={require("../Assets/Images/01.png")} alt="image loading" />
        <h2 className="cardh1-1"> incididunt cupidatat consec turades</h2>
        <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="iconic fa-solid fa-list"> Photography</i>
        <p className="card-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc </p>
        <p className="special-p">"A wise girls knows her limit to touch sky.Rpelat sapiesd praesentium adipisci.The question me an idea so asered

          James Hopkins"</p>
      </div>
      <div className="card">
        <img className='pageimg' src={require("../Assets/Images/02.png")} alt="image loading" />
        <h2 className="cardh1-1"> incididunt cupidatat consec turades</h2>
        <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="iconic fa-solid fa-list"> Photography</i>
        <p className="card-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsu</p>
        <p className="special-p">"A wise girls knows her limit to touch sky.Rpelat sapiesd praesentium adipisci.The question me an idea so asered

          James Hopkins"</p>
      </div>
      <div className="card">
        <img className='pageimg' src={require("../Assets/Images/03.png")} alt="image loading" />
        <h2 className="cardh1-1"> incididunt cupidatat consec turades</h2>
        <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="iconic fa-solid fa-list"> Photography</i>
        <p className="card-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsu</p>
        <p className="special-p">"A wise girls knows her limit to touch sky.Rpelat sapiesd praesentium adipisci.The question me an idea so asered

          James Hopkins"</p>
      </div>
    </div>
  </div>

    <div className="pagesmain">
    <div className="card">
        <img className='pageimg' src={require("../Assets/Images/01.png")} alt="image loading" />
        <h1 className="cardh1-1">Id reprehenderit mollit in tempor naidala incididunt cupidatat consec turades</h1>
        <i className="iconic fa-solid fa-clock"> 4 April, 2016  </i>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <i className="iconic fa-solid fa-list"> Photography</i>
        <p className="card-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsum. Sagittis sed feugiat blandit adipiscing mauris. Facilisis dictum in tellus ac turpis. Pretium, facilisis turpis duis pulvinar blandit est. Dolor accumsan pellentesque ullamcorper volutpat urna arcu. Nisi nulla et mauris et, ultricies odio semper gravida. Justo, lorem leo ullamcorper leo ornare phasellus. Dolor tristique sem quam eget tempor aliquet sem amet, eget. Vitae id mattis consectetur gravida sit lorem donec. Phasellus enim sodales congue varius arcu et, pulvinar ultrices. Faucibus nulla massa erat ut. Egestas integer pharetra proin pellentesque tellus quis pulvinar mauris. Sed quisque pellentesque platea vel. Proin felis tellus nunc risus tortor, nibh. Vulputate mauris fermen</p>
        <p className="special-p">"A wise girls knows her limit to touch sky.Rpelat sapiesd praesentium adipisci.The question me an idea so asered

          James Hopkins"</p>
      </div>

      <div className="nextdata">
        <div className="headingdiv">
        <h1 className="next-h1-1">Text Styles</h1>
        <h1>heading - 2</h1>
        <h2>heading - 3</h2>
        <h3>heading - 4</h3>
        <h4>heading - 5</h4>
        <h5>heading - 5</h5>

        </div>

        <h1 className="paragraph-h1-1">Paragraph</h1>
        <p className="nextdata-p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus cum cursus nunc nec velit volutpat consequat. Vitae dui, massa viverra nam dui laoreet ipsum. Sagittis sed feugiat blandit adipiscing mauris. Facilisis dictum in tellus ac turpis. Pretium, facilisis turpis duis pulvinar blandit est. Dolor accumsan pellentesque ullamcorper volutpat urna arcu. Nisi nulla et mauris et, ultricies odio semper gravida. Justo, lorem leo ullamcorper leo ornare phasellus. Dolor tristique sem quam eget tempor aliquet sem</p>
       <div className="typefaces">
       <h1 className="paragraph-h1-1">Typefaces</h1>
        <h3>Barlow Condensed</h3>
        <h3>Montserrat</h3>
       </div>

        <h1 className="table-h1-1">Table Style</h1>
        <table className='mytable'>
          <tbody>
            <tr>
              <th>Table</th>
              <th>Column</th>
              <th>Column</th>
            </tr>
            <tr>
              <td>Row 1.1</td>
              <td>Row 1.2</td>
              <td>Row 1.3</td>
            </tr>
            <tr>
              <td>Row 2.1</td>
              <td>Row 2.2</td>
              <td>Row 2.3</td>
            </tr>
            <tr>
              <td>Row 3.1</td>
              <td>Row 3.2</td>
              <td>Row 3.3</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>

    </>
  )
}
