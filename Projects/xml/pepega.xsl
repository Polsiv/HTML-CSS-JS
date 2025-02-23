<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">


<html>
  <head>

  <link rel="stylesheet" href="styles.css"/>

  </head>
  <body>
    <h1>PC COMPONENTS</h1>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Components</th>
        <th>Name</th>
        <th>Function</th>
        <th>Brands</th>
      </tr>
      <xsl:for-each select="PcComp/Components">
        <tr>
          <td>
            <xsl:value-of select="@IdComp"/>
          </td>
          <td>
            <xsl:value-of select="name"/>
          </td>
          <td>
            <xsl:value-of select="function"/>
          </td>
          <td>
            <xsl:value-of select="brands"/>
          </td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>