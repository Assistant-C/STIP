<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="fcenter">
        <html>
            <head>
                
                    <title>Lab9</title>
                    <link rel="stylesheet" href="css/st.css"></link>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
                </head>
                <body>
                    <h2 width="100%" style="text-align: center">Услуги фитнесс центра</h2>
                    <table class="table">
                        <tr>
                            <th>Услуга</th>
                            <th>Цена</th>
                            <th>Тренер</th>
                            <th>День и время урока</th>                            
                        </tr>
                        <xsl:for-each select="service">
                            <!-- <xsl:sort select="way" order="descending"/> -->
                            <!-- <xsl:if test="position()!=last()"> -->
                            <tr>
                                <td>
                                    <xsl:value-of select="type" />
                                </td>
                                <td>
                                    <xsl:value-of select="price" />
                                </td>                                
                                <td>
                                    <xsl:for-each select="trener">
                                   
                                         <p><span>Фамилия: </span> <xsl:value-of select="surname" /></p>
                                         <p><span>Имя: </span>  <xsl:value-of select="name" /> / <span>Отчество: </span> <xsl:value-of select="parentname" /></p>
                                         <p><span>Образование: </span>  <xsl:value-of select="education" /></p>
                                       
                                        
                                    </xsl:for-each>                                   
                                </td>                               
                                <td>
                                    <ul>
                                        <xsl:for-each select="lesson/day">
                                            <li>
                                                <xsl:apply-templates select="." />
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>                                
                            </tr>
                            <!-- </xsl:if> -->

                        </xsl:for-each>
                    </table>
                </body>
            </html>
        </xsl:template>
    </xsl:stylesheet>