var qrc_wrapper = document.createElement('div');
qrc_wrapper.innerHTML = '<style>@media screen{ .qrprint_l {display:none;} .qrprint_l img {}} @media print { .qrprint_l {display:block;border:0;font-family:Arial,Verdana;font-size:8pt;text-alight:left;} .qrprint_l img {}} </style> \
			 <div class="qrprint_l"><img src="http://chart.apis.google.com/chart?chs=150x150&cht=qr&chl=' + document.location.href + '" /><br/><div style="margin-left:25px;margin-top:-20px;">QRprintExtension</div></div>';
window.document.body.appendChild(qrc_wrapper);
